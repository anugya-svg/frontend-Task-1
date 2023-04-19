## Live Project Link : https://cosmocloud1.netlify.app/

## How to setup project on your local machine
- Create a clone of this repository

   ```
   git clone https://github.com/anugya-svg/frontend-Task-1.git
   ```
- Install all the dependencies
    ```
    npm i
    ```
- Run the project
    ```
    npm start
    ```
## Schema Structure
We have multiple arrays nested inside arrays, and it goes on and on as per the requirement.we have 6 fields in a object i.e.
- id (using npm uuid package )
- type (Data type of attribute)
- required
- nested (it is an array which contains the nested object)
- placeholder (the name of attribute)
- delete


```
   [ 
    0:  {
        "id": "beae3779-4970-4d07-a8aa-dd72ff8d6753",
        "type": "string",
        "required": false,
        "delete": false,
        "nested": [],
        "placeholder": "addName"
        },
        
    1:  {
        "id": "b1680fe1-3025-4004-bf2a-493811fefffa",
        "type": "object",
        "required": false,
        "delete": false,
        ,
    "placeholder": "addName"
        "nested": [
                {   
                "id": "1237b6ae-524e-493a-9387-fb8e3642944b",
                "type": "string",
                "required": false,
                "delete": false,
                "nested": [],
                "placeholder": "addName"
                }
                ]
        
}
    ]
```