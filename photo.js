function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function toggleIcon(iconId, textId, contentId) {
  var icon = document.getElementById(iconId);
  var text = document.getElementById(textId);
  var content = document.getElementById(contentId);
  
  if (icon.classList.contains("fa-plus")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-angle-down");
    content.style.display = "block";
  } else {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-plus");
    content.style.display = "none";
  }
}

function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


// Функция для проверки авторизации
function validateLogin() {
  var login = document.getElementById('login_input').value;
  var password = document.getElementById('pass_input').value;

  // Загрузка содержимого файла users.json
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var users = JSON.parse(xhr.responseText).users;

      // Поиск пользователя по логину и паролю
      var foundUser = users.find(function(user) {
        return user.login === login && user.password === password;
      });

      if (foundUser) {
        // Перенаправление на страницу my_profile.html
        window.location.href = 'my_profile.html';
      } else {
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Невірний логін або пароль';
        errorMessage.style.display = 'block';
      }
    }
  };
  xhr.open('GET', 'users.json', true);
  xhr.send();
}
