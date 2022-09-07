<script>
    import './switch.scss'
	import { createEventDispatcher } from "svelte";	

	function checked(node) {
		function handleChange() {
			if (node.checked) {
				node.parentNode.parentNode.classList.add("dark-mode");
				console.log("Checked");
			} else {
				node.parentNode.parentNode.classList.remove("dark-mode");
				console.log("Not checked");
			}
		}

		node.addEventListener("change", handleChange);

		return {
			destroy() {
				node.removeEventListener("change", handleChange);
			},
		};
	}

    const dispatch = createEventDispatcher();
    export let colorInButton = '';
    
</script>

<body>
	<div>
		<label class="switch">
			<input type="checkbox" use:checked />
			<span class="slider round" style="background-color:{colorInButton}"/>
		</label>
	</div>
</body>
