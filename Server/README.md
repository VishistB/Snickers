
# API for Learnify

API for project Learnify, by team Snickers, under track Education, for Hacklipse3.0.




## Tech Stack

**Server:** Django REST framework

**Database:** PostgreSQL



  
## Run Locally


Clone the project


Go to the project directory


Create an empty folder name "logs"


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

Run the following commands in psql shell:  
```
psql postgres
```
Create a new database for your Django project:
```
CREATE DATABASE snickers;
```
Create a new user with a password:
```
CREATE USER username WITH PASSWORD 'your_pass';
```
Grant all privileges on the database to the user:

```
GRANT ALL PRIVILEGES ON DATABASE snickers TO username;
```
Exit the Postgres shell:
```
\q
```
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

### Authentication related Endpoints

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


### User Tokens

For authenticated API calls, place API Key/User Token in the Headers section of the request, in the following format:

`Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`

where "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b" is the token.

In case for an authenticated endpoint, if authorization header is not present, `{"detail": "Authentication credentials were not provided."}`, and `401 status code` will be thrown.


### Video Sessions related Endpoints


#### View Scheduled Sessions

```http
  GET /session/view/<slug>/
```

* Authenticated Endpint

* slug: `public`: for getting public sessions list 

* slug: `mentorship` for getting mentorship sessions list


JSON Response (200 status code)

Array of JSON objects consisting following elements
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `topic` | `string` | Topic for session |
| `slug` | `int` | Unique identification for session |
| `start_time` | `string` | Satrt time - YYYY-mm-DDTHH:MM:SS+5:30 |
| `end_time` | `string` | Endtime of session - YYYY-mm-DDTHH:MM:SS+5:30 |
| `limit` | `int` | Maximum number of allowed participants, `0` if unlimited |
| `tags` | `Array` | Array of Relevant Topics(string) for the session |



#### Schedule a Session

```http
  POST /session/schedule/
```

* Authenticated Endpint

JSON Input data
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `topic` | `string` | Topic for session |
| `type` | `string` | Type of session - `private` for private session,  and `metorship` for mentorship session. |
| `start_time` | `string` | Start time of session - `YYYY-MM-DD HH:MM` |
| `end_time` | `string` | End time of session - `YYYY-MM-DD HH:MM` |
| `limit` | `string` | Maximum number of users that can join session. |
| `tags` | `string` | comma(,) separated string of tags(relevant topics) related to that session. |

Returns `201 status code` for succesful creation.

Returns `400 status code` for invalid attemt.


#### Generate Agora UID and Token

```http
  GET /session/generate-token/<slug>/
```

* Authenticated Endpint

* slug: `Session's unique identification slug`

JSON Response (200 Status Code)
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uid` | `string` | User ID |
| `token` | `string` | Generated token |

Returns `{"error": 'Invalid session slug!'}` and `400 status code` if given slug doesn't match with any of the record present, or if user requests for token out of the allowed window(session's running time).

