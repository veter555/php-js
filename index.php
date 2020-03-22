<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Hello, world!</title>
    <style>
        .errorRule {
            border: 1px solid red;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1 style="text-align: center"><b>Тестовое задание</b></h1>
        <div class="alert alert-success" style="display: none" role="alert">
            Отправленно на сервер
        </div>
        <div class="alert alert-danger" style="display: none" role="alert"></div>
        <br><br><br>
        <form>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <select class="form-control field">
                        <option disabled selected>Field...</option>
                        <option value="size">size</option>
                        <option value="forks">forks</option>
                        <option value="stars">stars</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <select class="form-control operator">
                        <option disabled selected>Operator...</option>
                        <option value=">">></option>
                        <option value="<">
                            <</option> <option value="=">=
                        </option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <input type="number" class="form-control valueField">
                </div>
                <div class="form-group col-md-2">
                    <button type="button" class="btn btn-danger deleteRule">Delete</button>
                </div>
            </div>
        </form>
        <hr>
        <button type="button" class="btn btn-info applyRule">Apply</button>
        <button type="button" class="btn btn-warning clearRule">Clear</button>
        <button type="button" style="float: right" class="btn btn-success addRule">Add Rule</button>
        <br><br><br>
        <table class="table" style="display: none">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Число форков</th>
                    <th scope="col">Followers</th>
                    <th scope="col">Звезды</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="js/script.js"></script>
</body>

</html>