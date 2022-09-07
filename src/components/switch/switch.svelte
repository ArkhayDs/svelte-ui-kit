<script>
   function checked(node) {
	
	function handleChange() {
		if (node.checked) {
			node.parentNode.parentNode.classList.add('dark-mode')
			console.log("Checked");
		} else {
			node.parentNode.parentNode.classList.remove('dark-mode')
			console.log("Not checked");
		}
	}
	
	node.addEventListener('change', handleChange);
	
	return {
		destroy() {
			node.removeEventListener('change', handleChange);
		}
	}
} 
</script>