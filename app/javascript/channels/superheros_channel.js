import consumer from "./consumer"

consumer.subscriptions.create("SuperherosChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data);

    const id = data.id;
    const listItem = document.getElementById(`superhero_${id}`)

    if (listItem) {

    } else {
    //  Create a new list item using the data
      const newElement = document.createElement("li");
      newElement.innerHTML = `
        <li id="superhero_${data.id}">
            <div>${data.name || ""}</div>
            <div>${data.power || ""}</div>
            <div>${data.weakness || ""}</div>
        </li>
      `
    //  Attach new element to the list
      const list = document.getElementById("superheros")
      list.appendChild(newElement)
    }
  }
});
