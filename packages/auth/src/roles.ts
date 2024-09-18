import { z } from 'zod'

export const roleSchema = z.union([
  z.literal('OWNER'),
  z.literal('ADMIN'),
  z.literal('MOD'),
  z.literal('SUPPORT'),
  z.literal('PLAYER'),
])

export type Role = z.infer<typeof roleSchema>
