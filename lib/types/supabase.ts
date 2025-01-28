export interface Database {
    public: {
        Tables: {
            members: {
                Row: {
                    id: string
                    created_at: string
                    updated_at: string
                    full_name: string
                    father_name: string | null
                    gender: string | null
                    dob: string | null
                    category: string | null
                    mobile: string | null
                    alternate_mobile: string | null
                    email: string | null
                    address: {
                        village: string
                        panchayat: string
                        assembly: string
                        post_office: string
                        tehsil: string
                        district: string
                        state: string
                    } | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    full_name: string
                    father_name?: string | null
                    gender?: string | null
                    dob?: string | null
                    category?: string | null
                    mobile?: string | null
                    alternate_mobile?: string | null
                    email?: string | null
                    address?: {
                        village: string
                        panchayat: string
                        assembly: string
                        post_office: string
                        tehsil: string
                        district: string
                        state: string
                    } | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    full_name?: string
                    father_name?: string | null
                    gender?: string | null
                    dob?: string | null
                    category?: string | null
                    mobile?: string | null
                    alternate_mobile?: string | null
                    email?: string | null
                    address?: {
                        village: string
                        panchayat: string
                        assembly: string
                        post_office: string
                        tehsil: string
                        district: string
                        state: string
                    } | null
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
    }
}