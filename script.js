// --- ATTENDANCE CALCULATOR LOGIC ---
document.getElementById('calc-attendance-btn').addEventListener('click', function () {
  const attended = parseInt(document.getElementById('attended').value);
  const total = parseInt(document.getElementById('total').value);
  const output = document.getElementById('attendance-result');

  if (isNaN(attended) || isNaN(total) || total <= 0 || attended > total) {
    output.style.display = 'block';
    output.style.backgroundColor = '#fed7d7';
    output.style.color = '#9b2c2c';
    output.innerText = 'Please enter valid attendance numbers.';
    return;
  }

  const percentage = ((attended / total) * 100).toFixed(1);
  output.style.display = 'block';

  if (percentage >= 75) {
    const buncable = Math.floor((attended / 0.75) - total);
    output.style.backgroundColor = '#c6f6d5';
    output.style.color = '#22543d';
    output.innerHTML = `<strong>Current Attendance: ${percentage}%</strong><br>You are above 75%! You can safely miss up to <strong>${buncable}</strong> more class(es).`;
  } else {
    const required = Math.ceil((0.75 * total - attended) / (1 - 0.75));
    output.style.backgroundColor = '#feebc8';
    output.style.color = '#7b341e';
    output.innerHTML = `<strong>Current Attendance: ${percentage}%</strong><br>Warning: You need to attend the next <strong>${required}</strong> class(es) consecutively to hit 75%.`;
  }
});

// --- SGPA CALCULATOR LOGIC ---
function getGradePoint(marks) {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 40) return 5;
  return 0;
}

document.getElementById('calc-sgpa-btn').addEventListener('click', function () {
  const m1 = parseFloat(document.getElementById('mark1').value);
  const c1 = parseFloat(document.getElementById('cred1').value);
  const m2 = parseFloat(document.getElementById('mark2').value);
  const c2 = parseFloat(document.getElementById('cred2').value);
  const m3 = parseFloat(document.getElementById('mark3').value);
  const c3 = parseFloat(document.getElementById('cred3').value);
  const output = document.getElementById('sgpa-result');

  if (isNaN(m1) || isNaN(c1) || isNaN(m2) || isNaN(c2) || isNaN(m3) || isNaN(c3)) {
    output.style.display = 'block';
    output.style.backgroundColor = '#fed7d7';
    output.style.color = '#9b2c2c';
    output.innerText = 'Please fill out marks and credits for all 3 subjects.';
    return;
  }

  const totalCredits = c1 + c2 + c3;
  const weightedPoints = (getGradePoint(m1) * c1) + (getGradePoint(m2) * c2) + (getGradePoint(m3) * c3);
  const sgpa = (weightedPoints / totalCredits).toFixed(2);

  output.style.display = 'block';
  output.style.backgroundColor = '#ebf8ff';
  output.style.color = '#2b6cb0';
  output.innerHTML = `<strong>Estimated SGPA: ${sgpa}</strong> / 10.0<br>Total Credits Counted: ${totalCredits}`;
});