# QuickCode
Create, Share and view different pieces of code quickly. <br>
Created using SvelteKit and using Supabase as the database system. <br>

## Contributing
First, git clone this project. <br>
Then, run `npm install` to install the required dependencies. <br>
Once the dependencies are installed, at the main route of the project, create a new file called `.env`. <br>
The `.env` file needs to contain the following code: 

```.env
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_URL=
```

Next to `VITE_SUPABASE_ANON_KEY=` you need to add a Supabase Anon key, you can get yourse by going to the [Supabase App page](https://app.supabase.io) and creating a new project.<br>
Next to `VITE_SUPABASE_URL=` you need to add a Supabase URL, you will also get it when you create the project.<br>


At the tables section create a new table called code and add the following columns: <br>

- code: It is a text area and it does not have a default value
- lang: It is a text area and it does not have a default value

That's all!  
You can run `npm run dev` and use it as a SvelteKit app.
