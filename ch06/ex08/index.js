export function restrict(target, template) {
  const keys = Object.keys(target);
  const diffKeys = keys.filter((key) => !template.includes(key));
  diffKeys.forEach((diffKey) => delete obj[diffKey]);
  return target;
}

export function substract(target, ...sources) {
  const keys = Object.keys(target);
  const diffKeys = keys.filter((key) => sources.includes(key));
  diffKeys.forEach((diffKey) => delete obj[diffKey]);
  return target;
}
