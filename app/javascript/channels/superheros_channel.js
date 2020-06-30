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
      // if list item contains a form - skip it
      if (listItem.querySelector("form")) {
        return
      }

      // We have to update the list item with the new data
      listItem.innerHTML = `
            <div>${data.name || ""}</div>
            <div>${data.power || ""}</div>
            <div>${data.weakness || ""}</div>
      `

    } else {
      //  Create a new list item using the data
      const newElement = document.createElement("li");
      newElement.id = "superhero_${data.id}"
      newElement.innerHTML = `
          <div>${data.name || ""}</div>
          <div>${data.power || ""}</div>
          <div>${data.weakness || ""}</div>
      `
      //  Attach new element to the list
      const list = document.getElementById("superheros")
      list.appendChild(newElement)
    }
  }
});
