import smi from 'node-nvidia-smi'

smi (err, data) ->

  # handle errors
  if err
    console.warn err
    process.exit 1

  # display GPU information
  console.log JSON.stringify(data, null, ' ')
