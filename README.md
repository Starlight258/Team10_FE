# 뽀득뽀득 USER-OWNER repo 통합

## Route

User 페이지에서 갑자기 Owner 페이지로 간다거나 그 반대의 상황이 일어나지 않도록 링크값 세팅 유의.

- User - 현행 유지

```jsx
<BrowserRouter>
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/reservationlist" element={<ReservationListPage />}></Route>
      <Route path="/reservation" element={<ReservationPage />}></Route>
      <Route path="/history" element={<ReservationHistoryPage />}></Route>
    </Route>
    <Route path="/carwashdetail" element={<CarwashDetailPage />}></Route>
    <Route path="/bayselection" element={<BaySelectionPage />}></Route>
    <Route path="/schedule" element={<SchedulePage />}></Route>
    <Route path="/payment" element={<PaymentPage />}></Route>
    <Route path="/paymentresult" element={<PaymentResultPage />}></Route>
    <Route path="/reviewpost" element={<ReviewPostPage />}></Route>
  </Routes>
</BrowserRouter>
```

- Owner - URL 앞에 /owner 추가

```jsx
<BrowserRouter>
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/owner/" element={<HomePage />}></Route>
      <Route path="/owner/sales" element={<SalesManagementPage />}></Route>
      <Route path="/owner/manage" element={<CarwashManagementPage />}></Route>
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
```

## Directory Structure

```
src
├── user
│ ├── apis
│ ├── components
│ ├── hooks
│ ├── layouts
│ ├── mocks
│ ├── pages
│ └── stories
└── owner
  ├── apis
  ├── components
  ├── hooks
  ├── layouts
  ├── mocks
  ├── pages
  └── stories
```

## Layouts

현재 MainLayout이라는 이름의 레이아웃이 User와 Owner에서 동시에 사용되고 있음.
외관은 다르지만 이름이 같기 때문에 UserMainLayout, OwnerMainLayout으로 변경 필요.

## Dependencies

`package.json` 파일 확인 후 빠진 부분을 추가
