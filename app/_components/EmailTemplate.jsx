// import React from 'react';

// export const EmailTemplate = ({
//   body,
// }) => {

//   // Get the current date
//   const currentDate = new Date();

//   // Format the date
//   const day = currentDate.getDate();
//   const month = currentDate.getMonth() + 1; // Months are zero-based
//   const year = currentDate.getFullYear();

//   // Pad single digits with leading zeros
//   const formattedDay = day < 10 ? '0' + day : day;
//   const formattedMonth = month < 10 ? '0' + month : month;

//   // Create the formatted date string (in YYYY-MM-DD format)
//   const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

//   // const getTotal = () => {
//   //   let total = 0;
//   //   cart?.forEach(item => {
//   //     total += Number(item?.product?.attributes?.price);
//   //   });
//   //   return total;
//   // };

//   return (
//     <div>
//       <h1>Welcome, {body.fullName}!</h1>
      
//       <p>
//         We are pleased to inform you that your recent order on Ecommerce has been successfully processed and payment has been received. Thank you for choosing us for your shopping needs!

//         Here are the details of your order:

//         Date of Purchase: {formattedDate}
//         Total Amount Paid: {body.amount}
//         Items Purchased:
        
//         {cart?.map((item, index) => (
//           <h3 key={index}>{item?.product?.attributes?.title}</h3>
//         ))}

//         Your order is now being prepared for shipment. You will receive a separate email with tracking information once your package has been dispatched.

//         If you have any questions or concerns regarding your order, feel free to contact our customer support team at [Customer Support Email or Phone Number]. We're here to assist you every step of the way.

//         Thank you for your purchase and we look forward to serving you again soon!

//         Best regards,
//         Ecommerce
//       </p>
//     </div>
//   );
// };











// import {
// 	Body,
// 	Button,
// 	Container,
// 	Head,
// 	Hr,
// 	Html,
// 	Img,
// 	Preview,
// 	Section,
// 	Text,
// } from '@react-email/components';
// import * as React from 'react';


// export const EmailTemplate = ({
// 	body,
// }) => (
// 	<Html>
// 		<Head />
// 		<Preview>
// 			The Ecommerce Platform For Yout Digital Products search now for your future
// 		</Preview>
// 		<Body style={main}>
// 			<Container style={container}>
// 				<Img
// 					src='https://res.cloudinary.com/ddfzikgiz/image/upload/v1704687428/itelm_ryakt_f_50_dqyqh_e31f29dc71.png'
// 					width="420"
// 					height="300"
// 					alt="Koala"
// 					style={logo}
// 				/>
// 				<Text style={paragraph}>Hi {body.fullName},</Text>
// 				<Text style={paragraph}>
// 					Thank you purchasing on Sleem Tech Ecommerce. Click on Below download button to download the all digital content
// 				</Text>
// 				<Section style={btnContainer}>
// 					<Button pX={12} pY={12}
// 						style={{
// 							padding: 5,
// 							paddingLeft: 10,
// 							paddingRight: 10,


// 						}}
// 						href="https://res.cloudinary.com/ddfzikgiz/image/upload/v1704313420/Nextpreview_564bd5e6fd.png">
// 						Download
// 					</Button>
// 				</Section>
// 				<Text style={paragraph}>
// 					Best,
// 					<br />
// 					The Sleem Tech team
// 				</Text>
// 				<Hr style={hr} />
// 				<Text style={footer}>Subscribe to Ali Sleem</Text>
// 			</Container>
// 		</Body>
// 	</Html>
// );


// const main = {
// 	backgroundColor: '#ffffff',
// 	fontFamily:
// 		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
// };

// const container = {
// 	margin: '0 auto',
// 	padding: '20px 0 48px',
// };

// const logo = {
// 	margin: '0 auto',
// };

// const paragraph = {
// 	fontSize: '16px',
// 	lineHeight: '26px',
// };

// const btnContainer = {
// 	textAlign: 'center',
// };

// const button = {
// 	backgroundColor: '#5F51E8',
// 	borderRadius: '3px',
// 	color: '#fff',
// 	fontSize: '16px',
// 	textDecoration: 'none',
// 	textAlign: 'center',
// 	display: 'block',
// };

// const hr = {
// 	borderColor: '#cccccc',
// 	margin: '20px 0',
// };

// const footer = {
// 	color: '#8898aa',
// 	fontSize: '12px',
// };


import * as React from 'react';



export const EmailTemplate = ({
  body,
}) => (
  <div>
    <h1>Welcome, {body.fullName}!</h1>
    <p>
      We hope this email finds you well.

      We are writing to confirm that we have received your payment for the order placed  on our ecommerce website. Your transaction has been successfully processed, and we are pleased to inform you that your order is now confirmed.

      Here are the details of your order:

      Total Amount Paid: {body.amount}
      Payment Method: Master Card
      Your satisfaction is our priority, and we are committed to ensuring a smooth and timely delivery of your products. Our team is working diligently to process your order, and you will receive a separate email with your shipment tracking information once your order has been dispatched.

      If you have any questions or require further assistance regarding your order, please feel free to reach out to our customer support team at onboarding@resend.dev. We are here to help you every step of the way.

      Once again, thank you for choosing Ecommerce. We truly appreciate your business and look forward to serving you again in the future.

      Warm regards,

      Ecommerce



    </p>



  </div>
);
