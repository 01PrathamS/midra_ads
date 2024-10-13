document.getElementById('budget').addEventListener('input', function() {
    const totalAmt = parseFloat(this.value) || 0;
    const ratePerHour = 250;
    
    // Calculate hours and taxes
    const hours = totalAmt / ratePerHour;
    const cgst = totalAmt * 0.09;
    const sgst = totalAmt * 0.09;
    const igst = totalAmt * 0.09; // For demonstration

    // Update UI with calculated values
    document.getElementById('hours').textContent = hours.toFixed(2);
    document.getElementById('total-amt').textContent = totalAmt.toFixed(2);
    document.getElementById('cgst').textContent = cgst.toFixed(2);
    document.getElementById('sgst').textContent = sgst.toFixed(2);
    document.getElementById('igst').textContent = igst.toFixed(2);
    document.getElementById('grand-total').textContent = (totalAmt + cgst + sgst + igst).toFixed(2);
});
