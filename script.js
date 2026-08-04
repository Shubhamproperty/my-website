alert("START");

const SUPABASE_URL = "https://sqavlyzqaxutbwqdytic.supabase.co";
const SUPABASE_KEY = "sb_publishable_j3AU3mvrWfDYqvxCZ46Z_A_lUEC2PkC";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

alert("CONNECTED SUCCESSFULLY");

async function loadproperties() {

    alert("LOADING PROPERTIES");

    const { data, error } = await supabaseClient
        .from("properties")
        .select("*");

    alert("AFTER SELECT");

    if (error) {
        alert("ERROR = " + error.message);
        return;
    }

    alert("TOTAL ROWS = " + data.length);

    const container = document.getElementById("properties-container");

    alert("CONTAINER = " + container);

    container.innerHTML = "";

    alert("FOR EACH START");

    data.forEach((property) => {
        alert("PHOTO URL = " = +property.image_urls);

        alert("TITLE = " + property.title);

        container.innerHTML += `
        <div>

            <img src="${property.image_urls}" width="300">

            <h2>${property.title}</h2>

            <p>${property.address}</p>

            <p>${property.price}</p>

            <p>${property.description}</p>

            <a href="${property.map_url}" target="_blank">
                View Location
            </a>

            <br><br>
            <hr>

        </div>
        `;

    });

}

loadproperties();