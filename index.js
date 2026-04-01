// Part 1: Login System
let username = prompt("Enter username (admin or guest):");
let password = prompt("Enter password:");

if ((username === "admin" || username === "guest") && password === "0000") {
  let accessLevel = username === "admin" ? "full" : "limited";
  alert("Login successful! Access level: " + accessLevel);

  // Part 2: Movie Package Selection
  let name = prompt("Enter your name:");
  let movieType = prompt("Choose movie type (standard, 3D, IMAX):");
  let tickets = parseInt(prompt("Enter number of tickets:"));

  let pricePerTicket;

  // Set ticket price
  switch (movieType.toLowerCase()) {
    case "standard":
      pricePerTicket = 5;
      break;
    case "3d":
      pricePerTicket = 7;
      break;
    case "imax":
      pricePerTicket = 10;
      break;
    default:
      alert("Invalid movie type!");
      throw new Error("Stop execution");
  }

  let ticketCost = tickets * pricePerTicket;

  // Snacks
  let snackChoice = prompt("Do you want snacks? (yes or no)");
  let snackCost = 0;

  if (snackChoice.toLowerCase() === "yes") {
    snackCost = tickets * 3;
  }

  // Discount
  let discount = 0;
  if (tickets > 3) {
    discount = 0.15 * (ticketCost + snackCost);
  }

  let totalBeforeFee = ticketCost + snackCost - discount;

  // Part 3: Group Payment Split
  let people = parseInt(prompt("Number of people splitting (1, 2, or 4):"));
  let serviceType = prompt("Choose service fee (none, small, high):");

  let serviceRate = 0;

  if (serviceType === "small") {
    serviceRate = 0.05;
  } else if (serviceType === "high") {
    serviceRate = 0.1;
  }

  let serviceFee = totalBeforeFee * serviceRate;
  let finalTotal = totalBeforeFee + serviceFee;
  let perPerson = finalTotal / people;

  // Output
  alert(
    "Hello " +
      name +
      "!\n" +
      "You selected " +
      movieType +
      " movie.\n\n" +
      "Tickets: " +
      tickets +
      " × $" +
      pricePerTicket +
      " = $" +
      ticketCost +
      "\n" +
      "Snacks: $" +
      snackCost +
      "\n" +
      "Discount: $" +
      discount.toFixed(2) +
      "\n\n" +
      "Service Fee: $" +
      serviceFee.toFixed(2) +
      "\n" +
      "Total: $" +
      finalTotal.toFixed(2) +
      "\n\n" +
      "Each person pays: $" +
      perPerson.toFixed(2),
  );
} else {
  alert("Invalid login");
}
