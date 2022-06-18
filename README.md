# Billing-App-Enhanced

Important Notes:
• This is an individual assignment.
• I will be checking for borrowed or copied assignments. All work is to be done from scratch,
you may not use any templates or other assistances.
• This assessment is out of 20 marks total.
• All the HTML/CSS/JS must be coded by you from scratch. Any function names, class names,
CSS styles, HTML layouts, etc. that match with the class exercises will be awarded zero
marks.
1. Programming Tasks:
In this assignment, you are to develop an application using forms for a self-order kiosk. The client
wants an application where the users can fill a form and be given a receipt. The kiosk business,
sale items and inventory are left to your discretion. At this time, you do not have to process the
forms on the server side or save the data into a database. You are only required to do client-side
programming where the code runs in the browser.
HTML Requirements(2 Marks):
• Do not use any pop ups through out this assignment.
• To order, the customer needs to enter their name, phone and credit card information.
• Make sure there are at least 4 items available for sale. A customer must be able to buy
zero or more of any given items. eg: 10 apples, 2 oranges, etc.
JavaScript Requirements:
• All JavaScript code must be located in an external script file. (1 mark)
• The following user inputs must be validated:
Do not use input type number, required attribute or other validations in HTML. You
must do the validations in client-side JavaScript only.
–2 Mandatory fields name and phone. (1 mark)
–Fields with specific format (3 marks):
• Credit Card in format xxxx-xxxx-xxxx-xxxx. eg: 4111-1111-1111-1111
• Credit Card Expiry Month in format: XX. eg: 01, 12, 08
• Credit Card Expiry Year in format: YYYY. eg: 2022, 2023
–No order can be for less than $10. (Make sure the price of some items is less than $10
to be able to test this validation.) (2 marks)
• A GST of 13% of the total price of items they are buying is charged. Automatically
calculate the GST amount based on the total purchase. (2 marks)
