function drawTable(data, sortBy) {
  if (data.length === 0) return '';

  const columns = Object.keys(data[0]);

  const sortedData = [...data].sort((a, b) => {
    if (typeof a[sortBy] === 'number') {
      return a[sortBy] - b[sortBy];
    }
    return String(a[sortBy]).localeCompare(String(b[sortBy]));
  });

  const widths = columns.map(col =>
    Math.max(
      col.length,
      ...sortedData.map(row => String(row[col]).length)
    ) + 2
  );

  const separator = '+' + widths.map(w => '-'.repeat(w + 1)).join('+') + '+';

  const header =
    '| ' +
    widths
      .map((w, i) =>
        String.fromCharCode(65 + i).padEnd(w, ' ')
      )
      .join('| ') +
    '|';

  const rows = sortedData.map(row =>
    '| ' +
    columns
      .map((col, i) =>
        String(row[col]).padEnd(widths[i], ' ')
      )
      .join('| ') +
    '|'
  );

  return [
    separator,
    header,
    separator,
    ...rows,
    separator
  ].join('\n');
}
