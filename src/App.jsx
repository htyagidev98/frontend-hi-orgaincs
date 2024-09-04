import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateAccount from "./auth/user/createAccount";
import { ToastContainer } from "react-toastify";
import CreateNewPassword from "./auth/user/createNewPassword";
import ForgotPassword from "./auth/user/forgotPassword";
import Login from "./auth/user/login";
import Signup from "./auth/user/signup";
import LoginWithOTP from "./auth/user/loginWithOTP";
import VerifyOtpForCreateAccount from "./auth/user/verifyOtpForCreateAccount";
import VerifyOtpForForgotPassword from "./auth/user/verifyOtpForForgotPassword";
import VerifyOtpForLogin from "./auth/user/verifyOtpForLogin";
import SellerAuthLayout from "./auth/seller/layout";
import SellerLogin from "./auth/seller/login";
import VarifyLoginOTPForSeller from "./auth/seller/varifyLoginOTPForSeller";
import CreateSellerAccount from "./auth/seller/createAccount";
import VerifySignupOtpForSeller from "./auth/seller/verifySignupOtpForSeller";
import ShopDetails from "./auth/seller/shopDetails";
import { BankDetails } from "./auth/seller/bankDetails";
import { GstDetails } from "./auth/seller/gstDetails";
import Setting from "./auth/user/setting/layout";
import SettingLayout from "./auth/user/setting/layout";
import UserDetails from "./auth/user/setting/userDetails";
import ChangePassword from "./auth/user/setting/changePassword";
import SaveAddress from "./auth/user/setting/saveAddress";
import AddressDetails from "./auth/seller/addressDetails";
import Layout from "./pages/seller/layout";
import Dashboard from "./pages/seller/dashboard";
import Categories from "./pages/seller/categories";
import Products from "./pages/seller/products";
import Sales from "./pages/seller/sales";
import Profile from "./pages/seller/profile";
import AddProduct from "./pages/seller/addProduct";
import Account from "./pages/seller/account";
import HelpCenter from "./pages/seller/profile";
import LicenseEntry from "./pages/seller/licenseEntry";
import AddProductDetails from "./pages/seller/addProductDetails";
import Earnings from "./pages/seller/earnings";
import Orders from "./pages/seller/orders";
import ProtectedRouteForSeller from "./component/protectedRouteForSeller";
import PublicRouteForSeller from "./component/publicRouteForSeller";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginwithotp" element={<LoginWithOTP />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/verifyotpforforgotpassword"
          element={<VerifyOtpForForgotPassword />}
        />
        <Route path="/verifyotpforlogin" element={<VerifyOtpForLogin />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route
          path="/verifyotpforcreateaccount"
          element={<VerifyOtpForCreateAccount />}
        />

        <Route
          path="/user/setting/userdetails"
          element={
            <SettingLayout>
              <UserDetails head="User Details" />{" "}
            </SettingLayout>
          }
        />

        <Route
          path="/user/setting/changepassword"
          element={
            <SettingLayout>
              <ChangePassword head="Address" />{" "}
            </SettingLayout>
          }
        />

        <Route
          path="/user/setting/saveaddress"
          element={
            <SettingLayout>
              <SaveAddress head="User Details" />{" "}
            </SettingLayout>
          }
        />
        <Route
          path="/seller/login"
          element={
            <PublicRouteForSeller>
              <SellerAuthLayout>
                <SellerLogin />
              </SellerAuthLayout>
            </PublicRouteForSeller>
          }
        />

        <Route
          path="/seller/varifyloginotp"
          element={
            <PublicRouteForSeller>
              <SellerAuthLayout>
                <VarifyLoginOTPForSeller />
              </SellerAuthLayout>
            </PublicRouteForSeller>
          }
        />

        <Route
          path="/seller/createaccount"
          element={
            <PublicRouteForSeller>
              <SellerAuthLayout>
                <CreateSellerAccount />
              </SellerAuthLayout>
            </PublicRouteForSeller>
          }
        />

        <Route
          path="/seller/signup/verifyotp"
          element={
            <PublicRouteForSeller>
              <SellerAuthLayout>
                <VerifySignupOtpForSeller />
              </SellerAuthLayout>
            </PublicRouteForSeller>
          }
        />

        <Route
          path="/seller/shopdetails"
          element={
            <PublicRouteForSeller>
              <SellerAuthLayout>
                <ShopDetails />
              </SellerAuthLayout>
            </PublicRouteForSeller>
          }
        />

        <Route
          path="/seller/addressdetails"
          element={
            <PublicRouteForSeller>
              <SellerAuthLayout>
                <AddressDetails />
              </SellerAuthLayout>
            </PublicRouteForSeller>
          }
        />

        <Route
          path="/seller/bankdetails"
          element={
            <PublicRouteForSeller>
              <SellerAuthLayout>
                <BankDetails />
              </SellerAuthLayout>
            </PublicRouteForSeller>
          }
        />

        <Route
          path="/seller/gstdetails"
          element={
            <PublicRouteForSeller>
              <SellerAuthLayout>
                <GstDetails />
              </SellerAuthLayout>
            </PublicRouteForSeller>
          }
        />

        <Route
          path="/seller/dashboard"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />

        <Route
          path="/seller/categories"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <Categories />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />

        <Route
          path="/seller/products"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <Products />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />

        <Route
          path="/seller/sales"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <Sales />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />

        <Route
          path="/seller/account"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <Account />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />

        <Route
          path="/seller/helpcenter"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <HelpCenter />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />

        <Route
          path="/seller/add/products"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <AddProduct />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />
        <Route
          path="/seller/licenseentry"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <LicenseEntry />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />
        <Route
          path="/seller/addproductdetails"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <AddProductDetails />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />
        <Route
          path="/seller/earnings"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <Earnings />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />
        <Route
          path="/seller/orders"
          element={
            <ProtectedRouteForSeller>
              <Layout>
                <Orders />
              </Layout>
            </ProtectedRouteForSeller>
          }
        />
      </Routes>
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  );
};

export default App;
