type Options = {
  hideFields?: string[]
  virtualId?: boolean
  timestamps?: boolean
}

const mangop = ({
  hideFields = [],
  virtualId = true,
  timestamps = true,
}: Options = {}) => {
  return {
    timestamps,
    versionKey: false,
    toJSON: {
      virtuals: virtualId,
      transform: (_: any, ret: any) => {
        if (virtualId && ret._id) {
          ret.id = ret._id.toString()
        }

        hideFields.forEach(field => {
          delete ret[field]
        })

        delete ret._id
        return ret
      },
    },
  }
}

export default mangop
