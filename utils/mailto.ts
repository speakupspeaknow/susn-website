interface MailToOptions {
  to: Array<string>
  subject: string
  body: string
}

export const makeMailToLink = (opts: MailToOptions) => {
  return `mailto:${opts.to.join(',')}?subject=${opts.subject}&body=${encodeURI(
    opts.body,
  )}`
}
