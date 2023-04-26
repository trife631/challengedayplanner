$(function () {
  var saveBtn = $('.saveBtn')


  var date = dayjs().format("D MMM YYYY")
  $('#curentDay').text(date)

  var hour = dayjs().hour()
  var block = $(".time-block")

  block.each(function () {
    var hourId = $(this).attr("id")

    if (hourId < hour) {
      $(this).children(".col-8").attr("class", "col-8 col-md-10 description past")
    }
    if (hourId == hour) {
      $(this).children(".col-8").attr("class", "col-8 col-md-10 description present")
    }
    if (hourId > hour) {
      $(this).children(".col-8").attr("class", "col-8 col-md-10 description future")
    }
  })

  saveBtn.on("click", function (event) {
    event.preventDefault()
    var key = $(this).parents().attr("id")
    var value = $(this).siblings(".col-8").val().replace(key)

    localStorage.setItem(key, JSON.stringify(value))
  })

  for (let i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
  }
})
