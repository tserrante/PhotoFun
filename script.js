const inputs = document.querySelectorAll('.controls input'); // Grab the sliders, put in node list
    const image = document.getElementById('main-image');
    const upload = document.getElementById('image-upload');
  
    // update the CSS variables
    function handleUpdate(){
      const suffix = this.dataset.sizing || ''; // Grab the 'px' suffix from 
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // changes values as sliders move
    upload.addEventListener("change", function(e){
      let reader = new FileReader();
      reader.addEventListener("load", e => image.src = e.target.result);
      reader.readAsDataURL(this.files[0]);
    });
    