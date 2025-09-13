function orderAlightMotion() {
    const email = document.getElementById('alight-email').value;
    const password = document.getElementById('alight-password').value;
    
    if (!email || !password) {
        alert('Harap isi email dan password dengan lengkap!');
        return;
    }
    
    alert('Terima kasih! Silakan transfer pembayaran ke DANA: 085709518077. Data login akan otomatis dikirim setelah pembayaran diterima.');
    
    // Reset form
    document.getElementById('alight-email').value = '';
    document.getElementById('alight-password').value = '';
}

function orderJokiML() {
    const rank = document.getElementById('ml-rank').value;
    const method = document.getElementById('ml-method').value;
    const email = document.getElementById('ml-email').value;
    const password = document.getElementById('ml-password').value;
    
    if (!email || !password) {
        alert('Harap isi email/ID dan password dengan lengkap!');
        return;
    }
    
    alert('Terima kasih! Silakan transfer pembayaran ke DANA: 085709518077. Data login akan otomatis dikirim setelah pembayaran diterima.');
    
    // Reset form
    document.getElementById('ml-email').value = '';
    document.getElementById('ml-password').value = '';
}
