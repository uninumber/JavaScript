
const expr = "Papayas";

switch (expr) {

	case "Oranges":
		console.log("Oranges are $0.68 a pound.");
		break;

	case "Papayas":
	case "Manoges": 
		console.log("Mangoes and apples are $0.44 a pound.");
		break;

	default: 
		console.log(`Sorry, we are out of ${expr}.`);

}
