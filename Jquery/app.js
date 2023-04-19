const biodataInfo = {};

$("#biodata-form").submit(function (e) {
  e.preventDefault();
  biodataInfo.fullName = $("#full-name").val();
  biodataInfo.age = $("#age").val();
  biodataInfo.height = $("#height").val();
  biodataInfo.weight = $("#weight").val();
  biodataInfo.dob = $("#dob").val();

  biodataInfo.fName = $("#f-name").val();
  biodataInfo.mName = $("#m-name").val();
  biodataInfo.fOccupation = $("#f-occupation").val();
  biodataInfo.mOccupation = $("#m-occupation").val();

  biodataInfo.mEducation = $("#m-education").val();
  biodataInfo.fEducation = $("#f-education").val();

  biodataInfo.occupation = $("#occupation").val();
  biodataInfo.company = $("#company").val();
  biodataInfo.designation = $("#designation").val();
  biodataInfo.honours = $("#honours").val();
  biodataInfo.hsc = $("#hsc").val();
  biodataInfo.ssc = $("#ssc").val();

  biodataInfo.presentAdd = $("#present-add").val();
  biodataInfo.permanentAdd = $("#permanent-add").val();
  biodataInfo.parentsPhone = $("#parents-phone").val();

  const biodataInfoJson = JSON.stringify(biodataInfo);
  localStorage.setItem("biodataInfo", biodataInfoJson);

  console.log(biodataInfo);
});
