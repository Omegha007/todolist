const container = document.querySelector(".container");
      // Add item to the list
      function addItem() {
        const value = document.getElementById("input").value;
        if (value) {
          const li = document.createElement("li");
          li.innerHTML =
            value +
            "<button onclick='delet(event)' class='btn' style='margin-left:5px'>delete</button>";
          document.getElementById("list").appendChild(li);
          document.getElementById("input").value = "";
        } else {
          alert("Please enter a task!");
        }
      }

      function delet(event) {
        event.target.parentElement.remove();
      }
      document.querySelector("button").addEventListener("click", addItem);