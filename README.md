# upgradProject-frontend
 unit4-project

Links for reference :

Frontend Repo Link : https://github.com/ShaikHajira123/upgradProject-frontend.git

Backend Repo Link : https://github.com/ShaikHajira123/upgradProject-backend.git

Blog link :

Technology We Used:
-----------------------------------------------------------
In Frontend:
1.HTML
2.CSS
3.JavaScript
4.Bootstrap

In Backend:
1.Mongo DB
2.AWS
3.Node JS
4.Express JS



Instructions to Run the Code Using AWS
-----------------------------------------------------------------
Note:

We created cloud database using MongoDb Atlas and deployed on AWS. So, if you want to run our code then please read the instructions below :

  1.Clone our repository https://github.com/ShaikHajira123/upgradProject-frontend.git for frontend code and https://github.com/ShaikHajira123/upgradProject-backend.git for backend code.

  2.Download Key from https://drive.google.com/file/d/1ZPwSP8HWnpITucW1kR-W7z0Ue9z3K3Qc/view?usp=sharing.

  3.Go to download folder of you computer and open Git Bash here.

  4.copy paste the link ssh -i "upgrad-server.pem" ubuntu@ec2-13-52-80-205.
  us-west-1.compute.amazonaws.com into your Git Bash terminal and press enter key.

  5.Type yes then press enter key ( if required ).

  6.Type cd /var then press enter key.

  7.Type ls then press enter key.

  8.Type cd upgradProject-backend then press enter key.

  9.Type sudo npm run server then press enter key.

  10.It will show a message that listening on port 4900.

  11.Open the index.html on Live server from https://github.com/ShaikHajira123/upgradProject-frontend.git .

  12.Then you can Navigate through other pages from Landing page like forbusiness.html, studyabroad.html,blog.html etc.

-----------------------------------------------------------

AWS API'S Instructions
-----------------------------------------------------------------------------------
  -> you can change the API by modifying url put one from below after ec2-13-52-80-205.us-west-1.compute.amazonaws.com:4900/
 1.datascience
 2.hire
 3.investors
 4.mba
 5.softwaretech
 6.studyabroad
 7.upgradWebinar
 8.users

 EX : http://ec2-3-88-12-166.compute-1.amazonaws.com:5000/upgradWebinar
