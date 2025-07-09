import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export const verify = client.verify.v2.services(
  process.env.TWILIO_VERIFY_SERVICE_SID || ''
)

export default client
