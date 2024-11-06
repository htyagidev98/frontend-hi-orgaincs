const ApiEndPoint = {
  Login: "/user/loginUser",
  CreateAccount: "/user/createAccount",
  VarifyOtp: "/user/otpVerify",
  Signup: "/user/updatedetails",
  ForgotPassword: "/user/forgotPassword",
  VarifyOtpForrgotPassword: "/user/forgototpverify",
  PasswordSet: "/user/passwordSet",
  LoginWithOtp: "/user/otpLogin",
  VarifyOtpLogin: "/user/loginOtpverify",
  CreateSellerAccount: "/seller/account",
  SellerShopDetails: "/seller/createDetails",
  SellerAddressDetails: "/address/sellerAddress",
  SellerBankDetails: "/seller/bankAccount",
  SellerGstDetails: "/seller/gstCreate",
  SellerLogin: "/seller/loginSeller",
  SellerTwoStep: "/seller/twostepLogin",
  SellerCategoryList: "/product/categoryList",
  SellerLicenceCheck: "/product/licenseCheck?category_id=",
  SellerAddLicence: "/product/addLicense",
  SellerAddCatProduct: "/product/addCatlog",
};

export default ApiEndPoint;
