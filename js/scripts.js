document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          document.getElementById('messageBox').style.display = 'block';
          setTimeout(function() {
            document.getElementById('messageBox').style.display = 'none';
            window.location.href = window.location.href; // Reload the page after 6 seconds
          }, 6000);
        } else {
          console.log(xhr.responseText); // Debugging purposes
          alert('Erro ao enviar os dados. Por favor, tente novamente.'); // Generic error message
        }
      }
    };
    xhr.open('POST', this.action, true);
    xhr.send(formData);
  });

  // Função para atualizar a cor dos emojis quando selecionados
  var emojis = document.querySelectorAll('.emoji');
  emojis.forEach(function(emoji) {
    emoji.addEventListener('click', function() {
      emojis.forEach(function(emoji) {
        emoji.classList.remove('active'); // Remove a classe 'active' de todos os emojis
      });
      this.classList.add('active'); // Adiciona a classe 'active' apenas ao emoji selecionado
    });
  });

  var emojis2 = document.querySelectorAll('.emoji2');
  emojis2.forEach(function(emoji2) {
    emoji2.addEventListener('click', function() {
      emojis2.forEach(function(emoji2) {
        emoji2.classList.remove('active'); // Remove a classe 'active' de todos os emojis
      });
      this.classList.add('active'); // Adiciona a classe 'active' apenas ao emoji selecionado
    });
  });

    var ratingRadioButtons = document.querySelectorAll('input[name="satisfacao_contabil"]');
    var experienceRadioButtons = document.querySelectorAll('input[name="experiencia_contabil"]');

    ratingRadioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            if (this.checked) {
                document.getElementById('selectedSatisfacao').innerText = this.value;
            }
        });
    });

    experienceRadioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            if (this.checked) {
                document.getElementById('selectedExperiencia').innerText = this.value;
            }
        });
    });