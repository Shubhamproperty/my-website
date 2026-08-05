alert("START");

const SUPABASE_URL = "https://sqavlyzqaxutbwqdytic.supabase.co";
const SUPABASE_KEY = "sb_publishable_j3AU3mvrWfDYqvxCZ46Z_A_lUEC2PkC";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);



async function loadproperties() {

    const { data, error } = await supabaseClient
        .from("properties")
        .select("*");

    if (error) {
        alert("ERROR = " + error.message);
        return;
    }



    const container =
        document.getElementById("properties-container");
    container.innerHTML = "";
    data.forEach((property) => {

        let imageUrl = "";

        if
            (property.image_urls.startsWith("[")) {

            imageUrl = JSON.parse(property.image_urls)[0];

        } else {
            imageUrl = property.image_urls;
        }


        container.innerHTML += `
        <div>

          <img src="${imageUrl}"
          width="300">
          


           

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