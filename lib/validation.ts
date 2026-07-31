export const contactFormSchema = {
  shape: {
    name: {
      safeParse: (val: string) => {
        if (!val || val.trim().length < 2) return { success: false, error: { issues: [{ message: 'Name must be at least 2 characters' }] } }
        if (val.length > 100) return { success: false, error: { issues: [{ message: 'Name must be less than 100 characters' }] } }
        if (!/^[a-zA-Z\s'-]+$/.test(val)) return { success: false, error: { issues: [{ message: 'Name contains invalid characters' }] } }
        return { success: true }
      }
    },
    email: {
      safeParse: (val: string) => {
        if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return { success: false, error: { issues: [{ message: 'Please enter a valid email address' }] } }
        return { success: true }
      }
    },
    service: {
      safeParse: (val: string) => {
        if (!val || !val.trim()) return { success: false, error: { issues: [{ message: 'Please select a service' }] } }
        return { success: true }
      }
    },
    message: {
      safeParse: (val: string) => {
        if (!val || val.trim().length < 10) return { success: false, error: { issues: [{ message: 'Message must be at least 10 characters' }] } }
        return { success: true }
      }
    },
    consent: {
      safeParse: (val: boolean) => {
        if (val !== true) return { success: false, error: { issues: [{ message: 'You must agree to the Privacy Policy' }] } }
        return { success: true }
      }
    }
  }
}

export const jobApplicationSchema = {
  shape: {
    name: {
      safeParse: (val: string) => {
        if (!val || val.trim().length < 2) return { success: false, error: { issues: [{ message: 'Name must be at least 2 characters' }] } }
        return { success: true }
      }
    },
    email: {
      safeParse: (val: string) => {
        if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return { success: false, error: { issues: [{ message: 'Please enter a valid email address' }] } }
        return { success: true }
      }
    },
    phone: {
      safeParse: (val: string) => {
        if (!val || val.trim().length < 5) return { success: false, error: { issues: [{ message: 'Please enter a valid phone number' }] } }
        return { success: true }
      }
    },
    consent: {
      safeParse: (val: boolean) => {
        if (val !== true) return { success: false, error: { issues: [{ message: 'You must agree to data processing' }] } }
        return { success: true }
      }
    }
  }
}

export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.doc', '.docx']
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export function validateFileUpload(file: File): { valid: boolean; error?: string } {
  if (!file || file.size === 0) {
    return { valid: false, error: 'Please select a file to upload' }
  }

  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: `File size must be less than 5MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB` }
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: 'Only PDF, DOC, and DOCX files are allowed' }
  }

  const ext = '.' + file.name.split('.').pop()?.toLowerCase()
  if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) {
    return { valid: false, error: 'Invalid file extension' }
  }

  const parts = file.name.split('.')
  if (parts.length > 2) {
    return { valid: false, error: 'Invalid file name' }
  }

  return { valid: true }
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .replace(/data:/gi, '')
}
