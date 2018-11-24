<script>
function myFunction() {
	var e = document.getElementById("pickup_place1");
	var strUser = e.options[e.selectedIndex].value;
    document.getElementById("demo").innerHTML = strUser;
}
</script>