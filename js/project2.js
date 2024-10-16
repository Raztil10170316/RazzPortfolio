function validateForm() {
  const carType = document.getElementById("carType").value;
  const startDate = new Date(document.getElementById("rentalStartDate").value);
  const endDate = new Date(document.getElementById("rentalEndDate").value);

  if (startDate >= endDate) {
      alert("Rental end date must be later than the start date.");
      return false;
  }

  const fileInput = document.getElementById("licenseUpload");
  const filePath = fileInput.value;
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
  if (!allowedExtensions.exec(filePath)) {
      alert("Invalid file type. Please upload a file with one of the following extensions: .jpg, .jpeg, .png, .pdf");
      fileInput.value = '';
      return false;
  }

  return true;
}