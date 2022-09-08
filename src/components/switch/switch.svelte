<script>
    import './switch.scss'
	import { createEventDispatcher } from "svelte";	

	function checked(node) {
		function handleChange() {
			if (node.checked) {
				if(blueDarkMode == false && lightBlueDarkMode == false && darkMode == true){
					node.parentNode.parentNode.classList.add("dark-mode");
				}
				else if(blueDarkMode == true && lightBlueDarkMode == false && darkMode == false){
					node.parentNode.parentNode.classList.add("blue-dark-mode");
				}
				else if(blueDarkMode == false && lightBlueDarkMode == true && darkMode == false){
					node.parentNode.parentNode.classList.add("light-blue-dark-mode");
				}
				console.log("Checked");
			} else {
				node.parentNode.parentNode.classList.remove("dark-mode");
				node.parentNode.parentNode.classList.remove("blue-dark-mode");
				node.parentNode.parentNode.classList.remove("light-blue-dark-mode");
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
    export let blueDarkMode = false;
	export let lightBlueDarkMode = false;
	export let darkMode = false;
</script>

<body>
	<div>
		<label class="switch">
			<input type="checkbox" use:checked />
			<span class="slider round" style="background-color:{colorInButton}"/>
		</label>
	</div>
</body>
