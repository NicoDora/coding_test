function solution(n, computers) {
    const edges = [];
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);
    const set = new Set();
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (computers[i][j] === 1) edges.push([i, j]);
        }
    }
    
    for (const [node1, node2] of edges) {
        union(node1, node2, parent, rank);
    }
    
    for (let i = 0; i < n; i++) {
        set.add(find(i, parent));
    }
    
    return set.size;
}

function find(node, parent) {
    if (parent[node] === node) return node;
    return (parent[node] = find(parent[node], parent));
}

function union(node1, node2, parent, rank) {
    const root1 = find(node1, parent);
    const root2 = find(node2, parent);
    
    if (root1 === root2) return;
    
    if (rank[root1] > rank[root2]) parent[root2] = root1;
    else {
        parent[root1] = root2;
        if (rank[root1] === rank[root2]) rank[root2]++;
    }
}