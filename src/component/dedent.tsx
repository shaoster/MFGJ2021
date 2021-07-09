/* From https://gist.github.com/malthe/02350255c759d5478e89 */
export function dedent(text: string): string {
  var re_whitespace = /^([ \t]*)(.*)\n/gm;
  var l, m, i;

  while ((m = re_whitespace.exec(text)) !== null) {
    if (!m[2])
      continue;

    /*eslint no-cond-assign: 0*/
    if (l = m[1].length) {
      i = (i !== undefined) ? Math.min(i, l) : l;
    } else
      break;
  }

  if (i)
    text = text.replace(new RegExp('^[ \t]{' + i + '}(.*\n)', 'gm'), '$1');

  return text;
}
