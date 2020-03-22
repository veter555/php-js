$(document).ready(function () {
    $('.deleteRule').on('click', function () {
        $('.alert-success').hide();
        $('.table').hide();
        $('.alert-danger').hide();
        $(this).parent().parent().remove();
    });

    $('.addRule').click(function () {
        $('.table').hide();
        $('.alert-success').hide();
        $('.alert-danger').hide();
        if ($('form > div').length < 3) {
            $('form').append('<div class="form-row">' +
                '<div class="form-group col-md-2">' +
                '<select class="form-control field">' +
                '<option disabled selected>Field...</option>' +
                '<option value="size">size</option>' +
                '<option value="forks">forks</option>' +
                '<option value="stars">stars</option>' +
                '</select>' +
                '</div>' +
                '<div class="form-group col-md-2">' +
                '<select class="form-control operator">' +
                '<option disabled selected>Operator...</option>' +
                '<option value=">">></option>' +
                '<option value="<"><</option>' +
                '<option value="=">=</option>' +
                '</select>' +
                '</div>' +
                '<div class="form-group col-md-2">' +
                '<input type="number" class="form-control valueField" >' +
                '</div>' +
                '<div class="form-group col-md-2">' +
                '<button type="submit" class="btn btn-danger deleteRule">Delete</button>' +
                '</div>' +
                '</div> ');
        } else {
            $('.alert-danger').text('Не больше трех').show();
        }
    });

    $('.clearRule').click(function () {
        $('.table').hide();
        $('.alert-success').hide();
        $('.alert-danger').hide();
        $('form > div').remove();
        $('form').append('<div class="form-row">' +
            '<div class="form-group col-md-2">' +
            '<select class="form-control field">' +
            '<option disabled selected>Field...</option>' +
            '<option value="size">size</option>' +
            '<option value="forks">forks</option>' +
            '<option value="stars">stars</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group col-md-2">' +
            '<select class="form-control operator">' +
            '<option disabled selected>Operator...</option>' +
            '<option value=">">></option>' +
            '<option value="<"><</option>' +
            '<option value="=">=</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group col-md-2">' +
            '<input type="number" class="form-control valueField" >' +
            '</div>' +
            '<div class="form-group col-md-2">' +
            '<button type="submit" class="btn btn-danger deleteRule">Delete</button>' +
            '</div>' +
            '</div> ');
    });

    $('.applyRule').click(function () {
        $('.table').hide();
        $('.alert-success').hide();
        $('.alert-danger').hide();
        $('.errorRule').removeClass('errorRule');
        console.log($('form > div').length);
        let errorParam = true;
        let param = [];
        for (let i = 0; i < $('form > div').length; i++) {
            if ($('form > div').eq(i).children('div').children('.field').val() == null) {
                $('form > div').eq(i).children('div').children('.field').addClass('errorRule');
                errorParam = false;
            }


            if ($('form > div').eq(i).children('div').children('.operator').val() == null) {
                $('form > div').eq(i).children('div').children('.operator').addClass('errorRule');
                errorParam = false;
            }
            if ($('form > div').eq(i).children('div').children('.valueField').val() == '' || ($('form > div').eq(i).children('div').children('.valueField').val() ^ 0) === $('form > div').eq(i).children('div').children('.valueField').val()) {
                $('form > div').eq(i).children('div').children('.valueField').addClass('errorRule');
                errorParam = false;
            }
            for (let k = 0; k < param.length; k++) {
                if (param[k].field == $('form > div').eq(i).children('div').children('.field').val()) {
                    errorParam = false;
                    $('form > div').eq(i).children('div').children('.field').addClass('errorRule');
                    $('.alert-danger').text('Поля Field не должны совпадать').show();
                }
            }
            param[i] = {
                'field': $('form > div').eq(i).children('div').children('.field').val(),
                'operator': $('form > div').eq(i).children('div').children('.operator').val(),
                'valueField': $('form > div').eq(i).children('div').children('.valueField').val()
            };

            console.log($('form > div').eq(i).children('div').children('.field').val());
        }
        if (errorParam) {
            $('.alert-success').show();
            $.ajax({
                url: "search.php",
                method: "POST",
                data: {
                    'data': JSON.stringify(param)
                },
                //dataType: 'json',
                success: function (params) {
                    if (params != 'error') {
                        $('.table > tbody').html('');
                        let result = JSON.parse(params);
                        console.log(result.items);
                        $('.clearRule').trigger('click');
                        $('.table').show();
                        for (let j = 0; j < result.items.length; j++) {
                            $('.table > tbody').append('<tr>' +
                                '<th scope="row">' + j + '</th>' +
                                '<td><a href="' + result.items[j].html_url + '">' + result.items[j].name + '</a></td>' +
                                '<td>' + result.items[j].size + '</td>' +
                                '<td>' + result.items[j].forks_count + '</td>' +
                                '<td>' + result.items[j].watchers_count + '</td>' +
                                '<td>' + result.items[j].stargazers_count + '</td>' +
                                '</tr>');
                        }
                    }
                }
            });
        }
        console.log(param);
    });
});