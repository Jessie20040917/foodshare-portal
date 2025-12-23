async function postJson(url, data) {
  console.log('--- postJson Start ---');
  console.log('URL:', url);
  console.log('Method: POST');
  console.log('Headers: Content-Type: application/json');
  console.log('Payload:', JSON.stringify(data, null, 2));

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    
    const text = await res.text();
    console.log('Status:', res.status, res.statusText);
    console.log('Response Body:', text);

    let json;
    try { json = JSON.parse(text); } catch { json = { raw: text }; }
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
    }
    
    return json;
  } catch (err) {
    console.error('postJson Error:', err);
    throw err;
  } finally {
    console.log('--- postJson End ---');
  }
}

async function putJson(url, data) {
  console.log('--- putJson Start ---');
  console.log('URL:', url);
  console.log('Method: PUT');
  console.log('Headers: Content-Type: application/json');
  console.log('Payload:', JSON.stringify(data, null, 2));

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    
    const text = await res.text();
    console.log('Status:', res.status, res.statusText);
    console.log('Response Body:', text);

    let json;
    try { json = JSON.parse(text); } catch { json = { raw: text }; }
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
    }
    
    return json;
  } catch (err) {
    console.error('putJson Error:', err);
    throw err;
  } finally {
    console.log('--- putJson End ---');
  }
}

async function getJson(url) {
  console.log('--- getJson Start ---');
  console.log('URL:', url);
  
  try {
    const res = await fetch(url, { method: "GET" });
    const text = await res.text();
    console.log('Status:', res.status, res.statusText);
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
    }
    
    return text ? JSON.parse(text) : null;
  } catch (err) {
    console.error('getJson Error:', err);
    throw err;
  } finally {
    console.log('--- getJson End ---');
  }
}

async function deleteJson(url, data) {
  console.log('--- deleteJson Start ---');
  console.log('URL:', url);
  console.log('Method: DELETE');
  if (data) {
    console.log('Headers: Content-Type: application/json');
    console.log('Payload:', JSON.stringify(data, null, 2));
  }

  try {
    const options = {
      method: "DELETE"
    };
    
    if (data) {
      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(data);
    }

    const res = await fetch(url, options);
    
    const text = await res.text();
    console.log('Status:', res.status, res.statusText);
    console.log('Response Body:', text);

    let json;
    try { json = JSON.parse(text); } catch { json = { raw: text }; }
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
    }
    
    return json;
  } catch (err) {
    console.error('deleteJson Error:', err);
    throw err;
  } finally {
    console.log('--- deleteJson End ---');
  }
}

window.postJson = postJson;
window.putJson = putJson;
window.getJson = getJson;
window.deleteJson = deleteJson;