<h1 align="center">Тестовое задание PHP+JS+HTML</h1>


Страница для поиска репозиториев на GitHub: можно задать одно или несколько правил и получить список репозиториев, удовлетворяющих этим правилам.



## 1. HTML + JS

<img src="image/test.png">


<p><b>Поля:</b></p>
<p><b>Field</b> - выпадающий список (size, forks, stars, followers)</p>
<p><b>Operator</b> - выпадающий список - операторы больше, меньше, равно.</p> 
<p><b>Value</b> - значение, целое число</p>
</br>
При нажатии delete правило удаляется </br>
При нажатии Clear все правила удаляются, и добавляется одно пустое правило.</br>
При нажатии Add Rule добавляется пустое правило в конец.</br>
При нажатии Apply правила в JSON отправляются на сервер.</br>

## 2.PHP 

На сервере PHP скрипт формирует запрос к GitHub Search API <a href="https://developer.github.com/v3/search/#search-repositories">https://developer.github.com/v3/search/#search-repositories</a> и выдает страницу с списком репозиториев, удовлетворяющих условиям. Для каждого репозитория должно выводиться его название (со ссылкой на репозиторий), размер, число форков, followers и звезд.
