<script>
    import './switch.scss'
	import { createEventDispatcher } from "svelte";
    /**
     * id of input /!\The value must be unique/!\
     */
     export let idInput = '1';
    /**
     * Label of input (Password, Email, Username...)
     */

    export let typeInput = 'text';
	

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
</script>

<body>
	<div>
		<label class="switch" id={idInput}>
			<input type={typeInput} id={idInput} use:checked />
			<span class="slider round" />
		</label>
	</div>
</body>
