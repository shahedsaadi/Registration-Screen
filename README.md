# Overview:
This website dynamically adjusts its registration and login interface based on the user's registration status. Here's how it behaves:

1) Button Text:

- Displays "Login" if userIsRegistered is true.
- Displays "Register" if userIsRegistered is false.

2) Confirm Password Field:

- Visible only when userIsRegistered is false (during registration).
- Hidden when userIsRegistered is true (during login).

To modify the user's registration status, Go to App.jsx and change (userIsRegistered) from false to true and vice versa.

# Technology Stack:
- Node.js
- JavaScript.
- React.js.

# To Run The Project:
- Clone the repository (git clone https://github.com/shahedsaadi/Registration-Screen.git).
- Open the folder(repository) inside Visual Studio or any source-code editor.
- Open Terminal > cd your-destination-folder.
 
1 - Install Dependencies: npm install
  
2 - Run the Development Server: npm run dev

3 - Visit the link: http://localhost:5173/

# Website Screenshot:

![55](https://github.com/shahedsaadi/Registration-Screen/assets/108287237/66291617-8d07-4e9b-8930-863b0e49b12e)

![66](https://github.com/shahedsaadi/Registration-Screen/assets/108287237/4df18381-4b07-478b-9a3d-e53841307762)
