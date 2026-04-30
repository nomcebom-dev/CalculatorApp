let current = "";

    function add(val) {
      if (current === "0" && val !== ".") current = "";
      current += val;
      document.getElementById("screen").value = current;
    }

    function clearAll() {
      current = "";
      document.getElementById("screen").value = "0";
    }

    function del() {
      current = current.slice(0, -1);
      document.getElementById("screen").value = current || "0";
    }

    function calculate() {
      try {
        current = String(eval(current));
        document.getElementById("screen").value = current;
      } catch {
        document.getElementById("screen").value = "Error";
        current = "";
      }
    }
 
