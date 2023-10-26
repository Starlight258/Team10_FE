import { BrowserRouter, Routes, Route } from "react-router-dom";
// USER
import HomePage from "./user/pages/HomePage";
import ReservationListPage from "./user/pages/ReservationListPage";
import ReservationPage from "./user/pages/ReservationPage";
import ReservationHistoryPage from "./user/pages/ReservationHistoryPage";
import CarwashDetailPage from "./user/pages/CarwashDetailPage";
import BaySelectionPage from "./user/pages/BaySelectionPage";
import SchedulePage from "./user/pages/SchedulePage";
import PaymentPage from "./user/pages/PaymentPage";
import PaymentResultPage from "./user/pages/PaymentResultPage";
import ReviewPostPage from "./user/pages/ReviewPostPage";

// OWNER
import LoginPage from "./owner/pages/LoginPage";
import SignupPage from "./owner/pages/SignupPage";
import RegisterPage from "./owner/pages/RegisterPage";
import SalesManagementPage from "./owner/pages/SalesManagementPage";
import OwnerMainLayout from "./owner/layouts/OwnerMainLayout";
import CarwashManagementPage from "./owner/pages/CarwashManagementPage";
import CarwashItemManagementPage from "./owner/pages/CarwashItemManagementPage";
import CarwashDetailEditingPage from "./owner/pages/CarwashDetailEditingPage";
import UserMainLayout from "./user/layouts/UserMainLayout";
import OwnerHomePage from "./owner/pages/OwnerHomePage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* USER */}
          <Route element={<UserMainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/reservationlist"
              element={<ReservationListPage />}></Route>
            <Route path="/reservation" element={<ReservationPage />}></Route>
            <Route path="/history" element={<ReservationHistoryPage />}></Route>
          </Route>
          <Route path="/carwashdetail" element={<CarwashDetailPage />}></Route>
          <Route path="/bayselection" element={<BaySelectionPage />}></Route>
          <Route path="/schedule" element={<SchedulePage />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/paymentresult" element={<PaymentResultPage />}></Route>
          <Route path="/reviewpost" element={<ReviewPostPage />}></Route>
          {/* OWNER */}
          <Route element={<OwnerMainLayout />}>
            <Route path="/owner" element={<OwnerHomePage />}></Route>
            <Route
              path="/owner/sales"
              element={<SalesManagementPage />}></Route>
            <Route
              path="/owner/manage"
              element={<CarwashManagementPage />}></Route>
            <Route
              path="/owner/manage/item"
              element={<CarwashItemManagementPage />}></Route>
            <Route
              path="/owner/manage/item/edit"
              element={<CarwashDetailEditingPage />}></Route>
          </Route>
          <Route path="/owner/login" element={<LoginPage />}></Route>
          <Route path="/owner/signup" element={<SignupPage />}></Route>
          <Route path="/owner/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
