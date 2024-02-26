document.addEventListener('DOMContentLoaded', function() {
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const colorBox = document.getElementById('colorBox');
    const hexInput = document.getElementById('hex');
    const colorPicker = document.getElementById('colorPicker');
  
    function updateColor() {
      const red = parseInt(redInput.value);
      const green = parseInt(greenInput.value);
      const blue = parseInt(blueInput.value);
  
      const rgbColor = `rgb(${red}, ${green}, ${blue})`;
      const hexColor = rgbToHex(red, green, blue);
  
      colorBox.style.backgroundColor = rgbColor;
      hexInput.value = hexColor;
  
      colorPicker.value = rgbToHex(red, green, blue);
    }
  
    function rgbToHex(r, g, b) {
      const toHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
  
      return '#' + toHex(r) + toHex(g) + toHex(b);
    }
  
    redInput.addEventListener('input', function() {
      redRange.value = redInput.value;
      updateColor();
    });
    greenInput.addEventListener('input', function() {
      greenRange.value = greenInput.value;
      updateColor();
    });
    blueInput.addEventListener('input', function() {
      blueRange.value = blueInput.value;
      updateColor();
    });
  
    redRange.addEventListener('input', function() {
      redInput.value = redRange.value;
      updateColor();
    });
    greenRange.addEventListener('input', function() {
      greenInput.value = greenRange.value;
      updateColor();
    });
    blueRange.addEventListener('input', function() {
      blueInput.value = blueRange.value;
      updateColor();
    });
  
    colorPicker.addEventListener('input', function() {
      const hex = colorPicker.value;
      const rgb = hexToRgb(hex);
      redInput.value = rgb.r;
      greenInput.value = rgb.g;
      blueInput.value = rgb.b;
      redRange.value = rgb.r;
      greenRange.value = rgb.g;
      blueRange.value = rgb.b;
      updateColor();
    });
  
    function hexToRgb(hex) {
      const bigint = parseInt(hex.substring(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    }
  
    updateColor(); // Update color initially
  });
  