<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        textarea {
            width: 100%;
            height: 200px;
            padding: 10px;
            border: 2px solid #3498db;
            border-radius: 5px;
            font-size: 16px;
            resize: none;
            /* Disable textarea resizing */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        textarea:focus {
            border-color: #2ecc71;
            /* Change border color on focus */
            box-shadow: 0 0 10px rgba(46, 204, 113, 0.5);
        }

        .flex-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 20px;
        }

        .flex-item {
            width: 48%;
            margin-bottom: 20px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            padding: 15px;
            text-align: center;
        }

        @keyframes spinner {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .loading-spinner {
            width: 60px;
            height: 60px;
            border: 10px solid #f3f3f3;
            /* Light grey */
            border-top: 10px solid #383636;
            /* Black */
            border-radius: 50%;
            animation: spinner 1.5s linear infinite;
        }
    </style>
</head>

<body>
    <div id="root"></div>


    @vitereactrefresh()
    @vite(['/public/build/assets/index-856110e9.js'])
</body>

</html>
