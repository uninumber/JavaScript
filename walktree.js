//DOM

function walktree(node) {
	if (node == 0)
		return;

	for (var i = 0; i <= node.childNodes.length; i++) {
		walktree(node.childNodes[i]);
	}
}
