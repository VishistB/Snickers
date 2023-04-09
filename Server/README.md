
# API for Learnify

API for project Learnify, by team Snickers, under track Education, for Hacklipse3.0.




## Tech Stack

**Server:** Django REST framework

**Database:** PostgreSQL



  
## Run Locally


Clone the project


Go to the project directory


We recommend you to use virtual environment

```bash
  python -m venv venv
```

Activate virtual environment   
For Windows PowerShell
```bash
    venv/Scripts/activate.ps1
```
For Linux and MacOS
```bash
    source venv/bin/activate
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Make sure you have installed PostgreSQL

Create *.env file* in base directory and place Security-Key and Database credentials.

Run Migrations

```
 python manage.py makemigrations
```
```
 python manage.py migrate
```

Start the server

```bash
  python manage.py runserver
```



  
## API Reference


#### Card verification

```http
  POST /auth/upload-id/
```
multipart/form-data
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id_proof` | `file` | ID Proof Image File |
| `designation` | `string` | student - for students, professional - for working professionals |

JSON Response (200 status code)
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | ID for backend id proof database entry |

Returns `{"error": "Something went wrong!"}` and `400 status code` if data extraction from id card failed.



#### Register

```http
  POST /auth/register/
```
multipart/form-data
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | email id (maximum length: 256) |
| `password` | `string` | password | 
| `name` | `string` | name (maximum length: 256) |
| `phone_no` | `string` | phone number | 
| `country` | `string` | country (maximum length: 128) |
| `gender` | `string` | Male/Female/Prefer Not to Say |
| `id_image` | `int` | ID given in the Id upload endpoint |
| `company` | `string` | Company, if user is working professional |
| `university` | `string` | University, if user is student |

Returns `HTTP 201 CREATED` status code for succesful execution.

Returns `{"error": "Email  already registered!"}` and `400 status code` for already duplicate registration emails.

Returns `{"error": "Verification failed!"}` and `400 status code` if name and company/university didn't match with id card.


#### Login

```http
  POST /auth/login/
```
multipart/form-data
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | email id |
| `password` | `string` | password |

JSON Response (200 Status Code)
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | API Key token for the user authentication |

Returns `{"error": 'Invalid Credentials!'}` and `400 status code` for invalid login attemt.
