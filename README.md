# FoodShare Portal Frontend

This is the frontend for the FoodShare Portal, designed to interact with Azure Logic Apps for backend functionality.

## Setup & Configuration

1.  **API Configuration**:
    *   Open `js/api-config.js`.
    *   Replace the placeholder URLs (`<<<PASTE_...>>>`) with your actual Logic App Trigger URLs.
    *   Ensure the AI URLs are correct (defaults provided).

2.  **CORS Configuration (Crucial)**:
    *   Since this is a browser-based application, you must enable CORS (Cross-Origin Resource Sharing) on your Logic Apps.
    *   Go to **Azure Portal** -> Your Logic App.
    *   Select the trigger card (e.g., "When an HTTP request is received").
    *   Go to **Settings**.
    *   Find the **CORS** section.
    *   Add your website's domain to the **Allowed Origins** list.
        *   If running locally, you might need to add `http://localhost:xxxx` or `*` (for testing only).
        *   If hosted on Azure Storage Static Website, add `https://<your-storage-account>.z1.web.core.windows.net`.

## Features

*   **Recipe Management**: Create, Read, Update, Delete recipes.
*   **Media Upload**: Upload images with metadata to Azure Storage (via Logic App).
*   **Media Gallery**: Browse uploaded images and metadata.
*   **AI Tools**:
    *   **Q&A**: Ask culinary questions.
    *   **Translator**: Translate text to different languages.

## Project Structure

*   `index.html`: Main landing page.
*   `recipes.html`: Recipe CRUD interface.
*   `upload.html`: Media upload interface.
*   `media-list.html`: Media gallery interface.
*   `ai-tools.html`: AI features interface.
*   `js/api-config.js`: Centralized API URL configuration.
*   `js/http.js`: HTTP utility for JSON requests.
*   `css/styles.css`: Global styles.

## Usage

Simply open `index.html` in a web browser (or serve via a local web server like Live Server).
